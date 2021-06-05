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
      this._context.IncidentChanges.Add(new IncidentChangesMessage(incident.ID, "Dodato :" + DateTime.Now.ToString()));

      await this._context.SaveChangesAsync();

      return Ok();
    }

    [HttpPost("/api/crud/createElement")]
    public async Task<IActionResult> CreateElement([FromBody] Element element) {

      this._context.Elements.Add(element);
      await this._context.SaveChangesAsync();
      return Ok();
    }

    [HttpPost("/api/crud/createSafetyDocument")]
    public async Task<IActionResult> CreateSafetyDoc([FromBody] SafetyDocDTO sdDTO)
    {

      SafetyDoc sdPravi = new SafetyDoc();
      sdPravi.Id = sdDTO.Id;
      sdPravi.Status = sdDTO.Status;
      sdPravi.Detalji = sdDTO.Detalji;
      sdPravi.Beleske = sdDTO.Beleske;
      sdPravi.CreatedBy = sdDTO.CreatedBy;
      sdPravi.SafetyType = sdDTO.SafetyType;
      sdPravi.TelefonskiBroj = sdDTO.TelefonskiBroj;

      sdPravi.IdNalogaRada = "cao";
      sdPravi.Ekipa = "nasa ekipa";

      this._context.SafetyDocChanges.Add(new SafetyDocChanges(sdPravi.Id, "Dodato :" + DateTime.Now.ToString()));
      this._context.SafetyDocuments.Add(sdPravi);
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
      this._context.PlanRadaChanges.Add(new PlanRadaChanges(plan.IdPlana, "Dodato :" + DateTime.Now.ToString()));
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
      a.IdNaloga = nrdto.Id;
      a.IdIncidenta = Guid.NewGuid().ToString();
      a.Ulica = "random";
      a.Kompanija = nrdto.Kompanija;
      a.Hitno = nrdto.Hitno;
      a.Status = nrdto.Status;
      a.TelefonskiBroj = nrdto.TelefonskiBroj;
      a.Svrha = nrdto.Svrha;
      this._context.Nalozi.Add(a);
      this._context.NalogRadaChanges.Add(new NalogRadaChanges(a.IdNaloga, "Dodato :" + DateTime.Now.ToString()));

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

    [HttpGet("/api/crud/getSafetyDocuments")]
    [Authorize]
    public async Task<IActionResult> GetSafetyDocuments()
    {
      List<SafetyDoc> retVal = this._context.SafetyDocuments.ToList();

      List<SafetyDocDTO> retValZaPrikaz = new List<SafetyDocDTO>();

      foreach (SafetyDoc sd in retVal)
      {
        SafetyDocDTO sdFake = new SafetyDocDTO();
        sdFake.Id = sd.Id;
        sdFake.Status = sd.Status;
        sdFake.Detalji = sd.Detalji;
        sdFake.Beleske = sd.Beleske;
        sdFake.CreatedBy = sd.CreatedBy;
        sdFake.SafetyType = sd.SafetyType;
        sdFake.TelefonskiBroj = sd.TelefonskiBroj;

        retValZaPrikaz.Add(sdFake);
      }


      return Ok(retValZaPrikaz);
    }

    [HttpGet("/api/crud/getIncident/{id}")]
    [Authorize]
    public async Task<IActionResult> GetIncident([FromRoute] string id)
    {
      Incident retVal = await this._context.Incidents.FindAsync(id);
      if (retVal != null)
      {
     
        return Ok(retVal);
      }
      else
      {
        return BadRequest();
      }
    }

    [HttpPost("api/crud/updateIncident")]
    public async Task<IActionResult> UpdateIncident([FromBody] Incident inc) {

      Incident retVal = await this._context.Incidents.FindAsync(inc.ID);
      if (retVal != null)
      {
        this._context.Attach(retVal);
        retVal.ETR = inc.ETR;
        retVal.ATA = inc.ATA;
        retVal.ETA = inc.ETA;
        retVal.AffectedPeople = inc.AffectedPeople;
        retVal.Confirmed = inc.Confirmed;
        retVal.IncidentType = inc.IncidentType;
        retVal.Voltage = inc.Voltage;
        retVal.VrijemeRada = inc.VrijemeRada;
        retVal.Status = inc.Status;
        retVal.Pozivi = inc.Pozivi;


        this._context.IncidentChanges.Add(new IncidentChangesMessage(retVal.ID,"Izmjenjeno :"+DateTime.Now.ToString()));
        await this._context.SaveChangesAsync();
        return Ok();
      }
      else
      {
        return BadRequest();
      }
    }
    [HttpGet("/api/crud/getPlan/{id}")]
    [Authorize]
    public async Task<IActionResult> GetPlan([FromRoute] string id)
    {
      PlanRada retVal = await this._context.Planovi.FindAsync(id);
      if (retVal != null)
      {
        PlanRadaDTO nrdto = new PlanRadaDTO();
        nrdto.IdPlana = retVal.IdPlana;
        nrdto.Kompanija = retVal.Kompanija;
        nrdto.KrajRada = retVal.KrajRada;
        nrdto.PocetakRada = retVal.PocetakRada;
        nrdto.Status = retVal.Status;
        nrdto.Svrha = retVal.Svrha;
        nrdto.TelefonskiBroj = retVal.TelefonskiBroj;
        nrdto.Ulica = retVal.Ulica;
        nrdto.Beleske = retVal.Beleske;
        nrdto.CreatedBy = retVal.CreatedBy;
        nrdto.Detalji = retVal.Detalji;
        nrdto.DocumentType = retVal.DocumentType;

        return Ok(nrdto);
      }
      else
      {
        return BadRequest();
      }
    }
    [HttpPost("api/crud/updatePlan")]
    public async Task<IActionResult> UpdatePlan([FromBody] PlanRadaDTO nrdto)
    {

      PlanRada retVal = await this._context.Planovi.FindAsync(nrdto.IdPlana);
      if (retVal != null)
      {
        this._context.Attach(retVal);
        retVal.IdPlana = nrdto.IdPlana;
        retVal.Kompanija = nrdto.Kompanija;
        retVal.KrajRada = nrdto.KrajRada;
        retVal.PocetakRada = nrdto.PocetakRada;
        retVal.Status = nrdto.Status;
        retVal.Svrha = nrdto.Svrha;
        retVal.TelefonskiBroj = nrdto.TelefonskiBroj;
        retVal.Ulica = nrdto.Ulica;
        retVal.Beleske = nrdto.Beleske;
        retVal.CreatedBy = nrdto.CreatedBy;
        retVal.Detalji = nrdto.Detalji;
        retVal.DocumentType = nrdto.DocumentType;
        this._context.PlanRadaChanges.Add(new PlanRadaChanges(retVal.IdPlana, "Updated :" + DateTime.Now.ToString()));

        await this._context.SaveChangesAsync();
        return Ok();
      }
      else
      {
        return BadRequest();
      }
    }

    [HttpGet("/api/crud/getNalog/{id}")]
    [Authorize]
    public async Task<IActionResult> GetNalog([FromRoute] string id)
    {
      NalogRada retVal = await this._context.Nalozi.FindAsync(id);
      if (retVal != null)
      {
        NalogRadaDTO nrdto = new NalogRadaDTO();
        nrdto.Beleske = retVal.Beleske;
        nrdto.Hitno = retVal.Hitno;
        nrdto.Id = retVal.IdNaloga;
        nrdto.Kompanija = retVal.Kompanija;
        nrdto.KrajRada = retVal.KrajRada;
        nrdto.NalogType = retVal.NalogType;
        nrdto.PocetakRada = retVal.PocetakRada;
        nrdto.Status = retVal.Status;
        nrdto.Svrha = retVal.Svrha;
        nrdto.TelefonskiBroj = retVal.TelefonskiBroj;
        return Ok(nrdto);
      }
      else
      {
        return BadRequest();
      }
    }
    [HttpPost("api/crud/updateNalog")]
    public async Task<IActionResult> UpdateNalog([FromBody] NalogRadaDTO nrdto)
    {
      NalogRada retVal = await this._context.Nalozi.FindAsync(nrdto.Id);
      if (retVal != null)
      {
        this._context.Attach(retVal);
        retVal.Beleske = nrdto.Beleske;
        retVal.Hitno = nrdto.Hitno;
        retVal.IdNaloga = nrdto.Id;
        retVal.Kompanija = nrdto.Kompanija;
        retVal.KrajRada = nrdto.KrajRada;
        retVal.NalogType = nrdto.NalogType;
        retVal.PocetakRada = nrdto.PocetakRada;
        retVal.Status = nrdto.Status;
        retVal.Svrha = nrdto.Svrha;
        retVal.TelefonskiBroj = nrdto.TelefonskiBroj;
        this._context.NalogRadaChanges.Add(new NalogRadaChanges(retVal.IdNaloga, "Updated :" + DateTime.Now.ToString()));

        await this._context.SaveChangesAsync();
        return Ok();
      }
      else
      {
        return BadRequest();
      }
    }
    [HttpPost("/api/crud/deleteIncident/{id}")]
    [Authorize]
    public async Task<IActionResult> DeleteIncident([FromRoute] string id)
    {
      Incident retVal = await this._context.Incidents.FindAsync(id);
      if (retVal != null)
      {
        this._context.Incidents.Remove(retVal);
        await this._context.SaveChangesAsync();

        return Ok();
      }
      else {
        return BadRequest();
      }
    }
    [HttpPost("/api/crud/deleteNalog/{id}")]
    [Authorize]
    public async Task<IActionResult> DeleteWork([FromRoute] string id)
    {
      NalogRada retVal = await this._context.Nalozi.FindAsync(id);
      if (retVal != null)
      {
        this._context.Nalozi.Remove(retVal);
        await this._context.SaveChangesAsync();

        return Ok();
      }
      else
      {
        return BadRequest();
      }
    }


    [HttpPost("/api/crud/deleteSwitching/{id}")]
    [Authorize]
    public async Task<IActionResult> DeleteSwitch([FromRoute] string id)
    {
      PlanRada retVal = await this._context.Planovi.FindAsync(id);
      if (retVal != null)
      {
        this._context.Planovi.Remove(retVal);
        await this._context.SaveChangesAsync();

        return Ok();
      }
      else
      {
        return BadRequest();
      }
    }
    [HttpGet("/api/crud/getSafety/{id}")]
    [Authorize]
    public async Task<IActionResult> GetSafetyDoc([FromRoute] string id)
    {
      SafetyDoc sd = await this._context.SafetyDocuments.FindAsync(id);
      if (sd != null)
      {
        SafetyDocDTO sddto = new SafetyDocDTO();
        sddto.Id = sd.Id;
        sddto.Status = sd.Status;
        sddto.Detalji = sd.Detalji;
        sddto.Beleske = sd.Beleske;
        sddto.CreatedBy = sd.CreatedBy;
        sddto.SafetyType = sd.SafetyType;
        sddto.TelefonskiBroj = sd.TelefonskiBroj;

        return Ok(sddto);
      }
      else
      {
        return BadRequest();
      }
    }

    [HttpPost("api/crud/updateSafety")]
    public async Task<IActionResult> UpdateSafety([FromBody] SafetyDocDTO sddto)
    {

      SafetyDoc retVal = await this._context.SafetyDocuments.FindAsync(sddto.Id);
      if (retVal != null)
      {
        this._context.Attach(retVal);
      
        retVal.Status = sddto.Status;
        retVal.Detalji = sddto.Detalji;
        retVal.Beleske = sddto.Beleske;
        retVal.CreatedBy = sddto.CreatedBy;
        retVal.SafetyType = sddto.SafetyType;
        retVal.TelefonskiBroj = sddto.TelefonskiBroj;


        this._context.SafetyDocChanges.Add(new SafetyDocChanges(retVal.Id, "Izmjenjeno :" + DateTime.Now.ToString()));
        await this._context.SaveChangesAsync();
        return Ok();
      }
      else
      {
        return BadRequest();
      }
    }
    [HttpPost("/api/crud/deleteSafetyDoc/{id}")]
    [Authorize]
    public async Task<IActionResult> DeleteSafetyDoc([FromRoute] string id)
    {
      SafetyDoc retVal = await this._context.SafetyDocuments.FindAsync(id);
      if (retVal != null)
      {
        this._context.SafetyDocuments.Remove(retVal);
        await this._context.SaveChangesAsync();

        return Ok();
      }
      else
      {
        return BadRequest();
      }
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
        nrdto.Id = nr.IdNaloga;
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



    [HttpGet("/api/crud/getIncidentChanges/{id}")]
    [Authorize]
    public async Task<IActionResult> GetIncidentChanges([FromRoute] string id) {

      List<IncidentChangesMessage> temp = this._context.IncidentChanges.ToList();
      List<string> retVal = new List<string>();

      foreach (IncidentChangesMessage i in temp) {

        if (i.IdIncidenta == id) {
          retVal.Add(i.Message);
        }

      }

      return Ok(retVal);
    }
    [HttpGet("/api/crud/getSafetyChanges/{id}")]
    [Authorize]
    public async Task<IActionResult> GetSafetyChanges([FromRoute] string id)
    {

      List<SafetyDocChanges> temp = this._context.SafetyDocChanges.ToList();
      List<string> retVal = new List<string>();

      foreach (SafetyDocChanges i in temp)
      {

        if (i.IdIncidenta == id)
        {
          retVal.Add(i.Message);
        }

      }

      return Ok(retVal);
    }

    [HttpGet("/api/crud/getWorkChanges/{id}")]
    [Authorize]
    public async Task<IActionResult> GetWorkChanges([FromRoute] string id)
    {

      List<NalogRadaChanges> temp = this._context.NalogRadaChanges.ToList();
      List<string> retVal = new List<string>();

      foreach (NalogRadaChanges i in temp)
      {

        if (i.IdIncidenta == id)
        {
          retVal.Add(i.Message);
        }

      }

      return Ok(retVal);
    }

    [HttpGet("/api/crud/getPlanChanges/{id}")]
    [Authorize]
    public async Task<IActionResult> GetPlanChanges([FromRoute] string id)
    {

      List<PlanRadaChanges> temp = this._context.PlanRadaChanges.ToList();
      List<string> retVal = new List<string>();

      foreach (PlanRadaChanges i in temp)
      {

        if (i.IdIncidenta == id)
        {
          retVal.Add(i.Message);
        }

      }

      return Ok(retVal);
    }
  }
}
