using System.Web.Http;
using WebDataHandler.Models;
using WebDataHandler.Services;

namespace WebDataHandler.Controllers
{
    [RoutePrefix("api")]
    public class WebDataController : ApiController
    {
        private IWebDataService _webDataService;

        public WebDataController(IWebDataService webDataService)
        {
            _webDataService = webDataService;
        }

        [HttpGet]
        public Property GetPropertyData(string url)
        {
            var data = _webDataService.GetWebData(url);
             return data;
        }
    }
}
