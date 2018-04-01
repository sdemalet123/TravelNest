using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using WebDataHandler.Services;
using NSubstitute;
using WebDataHandler.Models;
using WebDataHandler.Controllers;
using Shouldly;
using System.Web.Http;
using System.Net.Http;

namespace WebHandlerTests
{
    [TestClass]
    public class WebHandlerControllerTests
    {
        [TestMethod]
        public void Test_GetPropertyData_Success()
        {
            var webDataService = Substitute.For<IWebDataService>();
            var property = new Property {
                Bathrooms = 1,
                Beds = 2,
                Guests = 4,
                PropertyType = "studio",
                Url = "myUrl" };
            webDataService.GetWebData("myUrl").Returns(property);

            var controller = new WebDataController(webDataService);
            controller.Request = new HttpRequestMessage();
            controller.Configuration = new HttpConfiguration();
            var response = controller.GetPropertyData("myUrl");

            response.Bathrooms.ShouldBe(1);
            response.Beds.ShouldBe(2);
            response.Guests.ShouldBe(4);
            response.PropertyType.ShouldBe("studio");
            response.Url.ShouldBe("myUrl");

       }
    }
}
