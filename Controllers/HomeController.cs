using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using VirtualRecital.Models;
using Microsoft.AspNetCore.Http;

namespace VirtualRecital.Controllers
{
    public class HomeController : Controller
    {
        private Mycontext dbcontext;
        public HomeController(Mycontext context)
        {
            dbcontext=context;
        }
        [Route("")]
        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }
        [Route("/search/show")]
        [HttpGet]
        public IActionResult SearchShow(Search info)
        {
            string form =Request.Query["type"];
            System.Console.WriteLine(form);
            return View("show");
        }

    }
}
