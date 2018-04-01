using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using Unity;
using WebDataHandler.Services;

namespace WebDataHandler
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services
             IUnityContainer container = new UnityContainer();
            container.RegisterType<IWebDataService, WebDataService>();
            config.DependencyResolver = new App_Start.UnityResolver(container);
            config.EnableCors();

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}
