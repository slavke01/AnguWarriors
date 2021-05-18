using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AnguWarriorsBack.DataBase;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using AnguWarriorsBack.Models;
using AutoMapper;

namespace AnguWarriorsBack.Controllers
{
    [ApiController]
    public class CRUDController : ControllerBase
    {
        private readonly AnguWarrDBContext _context;
        private readonly IMapper mapper;
        public CRUDController(AnguWarrDBContext _context, IMapper mapper) { this._context = _context; this.mapper = mapper; }

       [HttpPost("/api/crud/createIncident")]
       public async Task<IActionResult> CreateIncident([FromBody] Incident incident)
        {
             this._context.Incidents.Add(incident);
             await this._context.SaveChangesAsync();

              return Ok();
       }

        [HttpPost("/api/crud/createNalog")]
        public async Task<IActionResult> CreateNalog([FromBody] NalogRadaDTO nrdto)
        {

          var a = mapper.Map<NalogRadaDTO, NalogRada>(nrdto);

          a.CreatedTime = DateTime.Now;
          a.CreatedBy = "pera";
          a.IdNaloga = Guid.NewGuid().ToString();
          
          this._context.Nalozi.Add(a);
          await this._context.SaveChangesAsync();

          return Ok();
        }

  }
}
