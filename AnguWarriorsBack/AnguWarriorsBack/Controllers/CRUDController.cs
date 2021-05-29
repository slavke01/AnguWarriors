using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AnguWarriorsBack.DataBase;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using AnguWarriorsBack.Models;
using AutoMapper;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Authorization;

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

    [HttpPost("/api/crud/createElement")]
    public async Task<IActionResult> CreateElement([FromBody] Element element) {

      this._context.Elements.Add(element);
      await this._context.SaveChangesAsync();
      return Ok();
    }

    [HttpPost("api/crud/createPlan")]
    public async Task<IActionResult> CreatePlan([FromBody] PlanRadaDTO plandto) {

      PlanRada plan = new PlanRada();

      plan.Beleske = plandto.Beleske;
      plan.CreatedBy = plandto.CreatedBy;
      plan.CreatedOn = DateTime.Now;
      plan.Detalji = plandto.Detalji;
      plan.DocumentType = plandto.DocumentType;
      plan.Ekipa = "neka";
      plan.IdIncidenta = "neki";
      plan.IdNalogaRada = "neki";
      plan.IdPlana = plandto.IdPlana;
      plan.Kompanija = plandto.Kompanija;
      plan.KrajRada = plandto.KrajRada;
      plan.PocetakRada = plandto.PocetakRada;
      plan.Status = plandto.Status;
      plan.Svrha = plandto.Svrha;
      plan.TelefonskiBroj = plandto.TelefonskiBroj;
      plan.Ulica = plandto.Ulica;

      this._context.Planovi.Add(plan);
      await this._context.SaveChangesAsync();

      return Ok();
    }
    [HttpPost("/api/crud/createNalog")]
    [Authorize]
    public async Task<IActionResult> CreateNalog([FromBody] NalogRadaDTO nrdto)
    {

      NalogRada a = new NalogRada();
      a.Beleske = nrdto.Beleske;
      a.NalogType = nrdto.NalogType;
      a.PocetakRada = nrdto.PocetakRada;
      a.KrajRada = nrdto.KrajRada;
      a.CreatedTime = DateTime.Now;
      a.CreatedBy = "pera";
      a.IdNaloga = Guid.NewGuid().ToString();
      a.IdIncidenta = Guid.NewGuid().ToString();
      a.Ulica = "random";
      a.Kompanija = nrdto.Kompanija;
      a.Hitno = nrdto.Hitno;
      a.Status = nrdto.Status;
      a.TelefonskiBroj = nrdto.TelefonskiBroj;
      a.Svrha = nrdto.Svrha;
      this._context.Nalozi.Add(a);
      await this._context.SaveChangesAsync();
      return Ok();
    }


    [HttpGet("/api/crud/getIncidents")]
    [Authorize]
    public async Task<IActionResult> GetIncidents()
    {
      List<Incident> retVal = this._context.Incidents.ToList();
      return Ok(retVal);
    }

    [HttpGet("/api/crud/getElements")]
    public async Task<IActionResult> GetElements()
    {
      List<Element> retVal = this._context.Elements.ToList();
      return Ok(retVal);
    }



    [HttpGet("/api/crud/getNalozi")]
    [Authorize]
    public async Task<IActionResult> GetNalozi()
    {
      List<NalogRada> naloziOriginal = this._context.Nalozi.ToList();
      List<NalogRadaDTO> naloziNovi = new List<NalogRadaDTO>();

      foreach (NalogRada nr in naloziOriginal)
      {
        NalogRadaDTO nrdto = new NalogRadaDTO();

        nrdto.NalogType = nr.NalogType;
        nrdto.Status = nr.Status;
        nrdto.PocetakRada = nr.PocetakRada;
        nrdto.KrajRada = nr.KrajRada;
        nrdto.Svrha = nr.Svrha;
        nrdto.Beleske = nr.Beleske;
        nrdto.Hitno = nr.Hitno;
        nrdto.Kompanija = nr.Kompanija;
        nrdto.TelefonskiBroj = nr.TelefonskiBroj;

        naloziNovi.Add(nrdto);

      }


      return Ok(naloziNovi);
    }

    [HttpGet("/api/crud/getPlanovi")]
    public async Task<IActionResult> GetPlanovi() {

      List<PlanRada> planoviOrg = this._context.Planovi.ToList();
      List<PlanRadaDTO> planoviDTO = new List<PlanRadaDTO>();

      foreach (PlanRada p in planoviOrg) {
        PlanRadaDTO temp = new PlanRadaDTO();
        temp.Beleske = p.Beleske;
        temp.CreatedBy = p.CreatedBy;
        temp.Detalji = p.Detalji;
        temp.DocumentType = p.DocumentType;
        temp.IdPlana = p.IdPlana;
        temp.Kompanija = p.Kompanija;
        temp.KrajRada = p.KrajRada;
        temp.PocetakRada = p.PocetakRada;
        temp.Status = p.Status;
        temp.Svrha = p.Svrha;
        temp.TelefonskiBroj = p.TelefonskiBroj;
        temp.Ulica = p.Ulica;

        planoviDTO.Add(temp);
      }



      return Ok(planoviDTO);
    }
  }
}
