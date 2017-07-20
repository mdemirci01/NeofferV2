using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace NeofferV2.Controllers
{
    [Route("api/[controller]")]
    public class CoreController : Controller
    {
        

        [HttpGet("[action]")]
        public IEnumerable<Page> Pages()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new Page
            {
                 Id = Guid.NewGuid().ToString(),
                 Title = "Home Page",
                 Slug = "home",
                 Published = true
            });
        }

        public class Page
        {
            public string Id { get; set; }
            public string Title { get; set; }
            public string Slug { get; set; }
            public bool Published { get; set; }
        }
    }
}
