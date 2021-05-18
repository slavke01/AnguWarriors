using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AnguWarriorsBack.DataBase;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using AnguWarriorsBack.Models;
namespace AnguWarriorsBack.Controllers
{
    [ApiController]
    public class CRUDController : ControllerBase
    {
        private readonly AnguWarrDBContext _context;

        public CRUDController(AnguWarrDBContext _context) { this._context = _context; }

       [HttpPost("/api/crud/createIncident")]
       public async Task<IActionResult> CreateIncident([FromBody] Incident incident)
        {
             this._context.Incidents.Add(incident);
             await this._context.SaveChangesAsync();

              return Ok();
       }
    }
}
