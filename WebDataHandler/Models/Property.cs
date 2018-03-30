using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebDataHandler.Models
{
    public class Property
    {
        public int Guests { get; set; }
        public int Beds { get; set; }
        public int Bathrooms { get; set; }
        public string PropertyType { get; set; }
    }
}