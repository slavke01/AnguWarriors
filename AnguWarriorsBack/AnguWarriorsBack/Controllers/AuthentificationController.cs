using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using AnguWarriorsBack.Models;
using AnguWarriorsBack.DataBase;
using System.Web.Http.Cors;

namespace AnguWarriorsBack.Controllers
{

   // [Route("api/auth")]
    [ApiController]
    public class AuthentificationController : ControllerBase
    {


       private readonly AnguWarrDBContext _context;

    public AuthentificationController(AnguWarrDBContext _context) {
      this._context = _context;

    }

        
        [HttpPost("/api/register")]
       // [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
         public async Task<IActionResult> RegisterUser([FromBody] User user) {
              this._context.Users.Add(user);
              await this._context.SaveChangesAsync();
              return Ok();
              
          }

    }
}
