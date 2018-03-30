using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebDataHandler.Models;

namespace WebDataHandler.Services
{
    public interface IWebDataService
    {
        Property GetWebData(string url);
    }
}
