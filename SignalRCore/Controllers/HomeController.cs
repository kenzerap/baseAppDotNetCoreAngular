using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace SignalRCore.Controllers
{
    [Route("api/[controller]")]
    public class HomeController : Controller
    {
        public HomeController() { }

        //public IActionResult Index()
        //{
        //    return View();
        //}

        [HttpGet]
        public IActionResult getMessage()
        {
            return Ok(new { message = "hello"});
        }
    }
}