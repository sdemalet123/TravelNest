using System.Web.Http;
using WebDataHandler.Models;
using WebDataHandler.Services;
using System.Web.Http.Cors;

namespace WebDataHandler.Controllers
{
    [RoutePrefix("api")]
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
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
