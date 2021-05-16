using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using AnguWarriorsBack.Models;
using AnguWarriorsBack.DataBase;
namespace AnguWarriorsBack.Controllers
{

    //[Route("api/[controller]")]
    [ApiController]
    public class AuthentificationController : ControllerBase
    {


       private readonly AnguWarrDBContext _context;


         [HttpPost("/api/register")]
         public async Task<IActionResult> RegisterUser() {

              return NotFound();
          }

    }
}
