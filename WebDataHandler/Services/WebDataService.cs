using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using AngleSharp;
using WebDataHandler.Models;

namespace WebDataHandler.Services
{
    public class WebDataService : IWebDataService
    {

        public Property GetWebData(string  url)
        {
            try
            {
                Task<List<string>> callTask = Task.Run(() => GetContent(url));
                // Wait for it to finish
                callTask.Wait();
                // Get the result
                var titles = callTask.Result;

                // though we could loop round and search for key words like Bathrooms and Bedrooms
                var property = new Property();
                // making an assumption here that property type is ALWAYS second in the list!!!
                // I could do this with everything else but they seem to be pretty consistent and it is safer to
                // reference by actual value
                property.PropertyType = titles[1];

                // obviously if there were going to be numerous properties I would refactor this
                // so as not to repeat code
                string bathrooms = titles.First(s => s.ToLower().Contains("bath"));
                property.Bathrooms = Int32.Parse(bathrooms.Split(' ')[0]);
                string beds = titles.First(s => s.ToLower().Contains("bed"));
                property.Beds = Int32.Parse(beds.Split(' ')[0]);
                string guests = titles.First(s => s.ToLower().Contains("guest"));
                property.Guests = Int32.Parse(guests.Split(' ')[0]);
                return property;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"There was an exception: {ex.ToString()}");
                throw;
            }
        }

        static async Task<List<string>> GetContent(string address)
        {
            var config = Configuration.Default.WithDefaultLoader();
            var context = BrowsingContext.New(config);
            var document = await context.OpenAsync(address);

            // Perform the query to get all cells with the content
            var cells = document.QuerySelectorAll("span._y8ard79");

            // We are only interested in the text - select it with LINQ
            var titles = cells.Select(m => m.TextContent);
            return titles.ToList();
        }
    }
}