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


    public CRUDController(AnguWarrDBContext _context) { this._context = _context; }

    private readonly AnguWarrDBContext _context;


    #region Incidenti

    [HttpPost("/api/crud/createIncident")]
    public async Task<IActionResult> CreateIncident([FromBody] Incident incident)
    {

      if (incident == null) {
        return BadRequest();

      }
      this._context.Incidents.Add(incident);
      this._context.IncidentChanges.Add(new IncidentChangesMessage(incident.ID, "Dodato :" + DateTime.Now.ToString()));

      await this._context.SaveChangesAsync();

      return Ok();
    }


    [HttpGet("/api/crud/getIncidents")]
    [Authorize]
    public async Task<IActionResult> GetIncidents()
    {
      List<Incident> retVal = this._context.Incidents.ToList();
      if (retVal == null) {
        return BadRequest();
      }
      return Ok(retVal);
    }


    [HttpGet("/api/crud/getIncidentsByDate")]
    [Authorize]
    public async Task<IActionResult> GetIncidentsByDate()
    {
      List<Incident> sviIncidenti = this._context.Incidents.ToList();

      List<Incident> planiraniIncidenti = new List<Incident>();
      List<Incident> neplaniraniIncidenti = new List<Incident>();

      foreach (Incident inc in sviIncidenti)
      {
        if (inc.IncidentType == TipIncidenta.PLANIRANI)
        {
          planiraniIncidenti.Add(inc);
        }
        else
        {
          neplaniraniIncidenti.Add(inc);
        }
      }

      int pJ = 0, pF = 0, pM = 0, pA = 0, pMaj = 0, pJun = 0, pJul = 0, pAvg = 0, pS = 0, pO = 0, pN = 0, pD = 0;
      int nJ = 0, nF = 0, nM = 0, nA = 0, nMaj = 0, nJun = 0, nJul = 0, nAvg = 0, nS = 0, nO = 0, nN = 0, nD = 0;


      foreach (Incident inc in planiraniIncidenti)
      {
        if (inc.VrijemeRada.Month == 1)
        {
          pJ++;
          continue;
        }

        if (inc.VrijemeRada.Month == 2)
        {
          pF++;
          continue;
        }

        if (inc.VrijemeRada.Month == 3)
        {
          pM++;
          continue;
        }

        if (inc.VrijemeRada.Month == 4)
        {
          pA++;
          continue;
        }

        if (inc.VrijemeRada.Month == 5)
        {
          pMaj++;
          continue;
        }

        if (inc.VrijemeRada.Month == 6)
        {
          pJun++;
          continue;
        }

        if (inc.VrijemeRada.Month == 7)
        {
          pJul++;
          continue;
        }

        if (inc.VrijemeRada.Month == 8)
        {
          pAvg++;
          continue;
        }

        if (inc.VrijemeRada.Month == 9)
        {
          pS++;
          continue;
        }
        if (inc.VrijemeRada.Month == 10)
        {
          pO++;
          continue;
        }
        if (inc.VrijemeRada.Month == 11)
        {
          pN++;
          continue;
        }

        if (inc.VrijemeRada.Month == 12)
        {
          pD++;
          continue;
        }

      }

      foreach (Incident inc in neplaniraniIncidenti)
      {
        if (inc.VrijemeRada.Month == 1)
        {
          nJ++;
          continue;
        }

        if (inc.VrijemeRada.Month == 2)
        {
          nF++;
          continue;
        }

        if (inc.VrijemeRada.Month == 3)
        {
          nM++;
          continue;
        }

        if (inc.VrijemeRada.Month == 4)
        {
          nA++;
          continue;
        }

        if (inc.VrijemeRada.Month == 5)
        {
          nMaj++;
          continue;
        }

        if (inc.VrijemeRada.Month == 6)
        {
          nJun++;
          continue;
        }

        if (inc.VrijemeRada.Month == 7)
        {
          nJul++;
          continue;
        }

        if (inc.VrijemeRada.Month == 8)
        {
          nAvg++;
          continue;
        }

        if (inc.VrijemeRada.Month == 9)
        {
          nS++;
          continue;
        }
        if (inc.VrijemeRada.Month == 10)
        {
          nO++;
          continue;
        }
        if (inc.VrijemeRada.Month == 11)
        {
          nN++;
          continue;
        }

        if (inc.VrijemeRada.Month == 12)
        {
          nD++;
          continue;
        }

      }


      List<int> listaPlanirani = new List<int>();
      List<int> listaNeplanirani = new List<int>();

      listaPlanirani.Add(pJ);
      listaPlanirani.Add(pF);
      listaPlanirani.Add(pM);
      listaPlanirani.Add(pA);
      listaPlanirani.Add(pMaj);
      listaPlanirani.Add(pJun);
      listaPlanirani.Add(pJul);
      listaPlanirani.Add(pAvg);
      listaPlanirani.Add(pS);
      listaPlanirani.Add(pO);
      listaPlanirani.Add(pN);
      listaPlanirani.Add(pD);


      listaNeplanirani.Add(nJ);
      listaNeplanirani.Add(nF);
      listaNeplanirani.Add(nM);
      listaNeplanirani.Add(nA);
      listaNeplanirani.Add(nMaj);
      listaNeplanirani.Add(nJun);
      listaNeplanirani.Add(nJul);
      listaNeplanirani.Add(nAvg);
      listaNeplanirani.Add(nS);
      listaNeplanirani.Add(nO);
      listaNeplanirani.Add(nN);
      listaNeplanirani.Add(nD);


      List<List<int>> rez = new List<List<int>>();
      rez.Add(listaPlanirani);
      rez.Add(listaNeplanirani);

      return Ok(rez);
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
    public async Task<IActionResult> UpdateIncident([FromBody] Incident inc)
    {

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


        this._context.IncidentChanges.Add(new IncidentChangesMessage(retVal.ID, "Izmjenjeno :" + DateTime.Now.ToString()));
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
      else
      {
        return BadRequest();
      }
    }


    [HttpGet("/api/crud/getIncidentChanges/{id}")]
    [Authorize]
    public async Task<IActionResult> GetIncidentChanges([FromRoute] string id)
    {

      List<IncidentChangesMessage> temp = this._context.IncidentChanges.ToList();
      List<string> retVal = new List<string>();

      foreach (IncidentChangesMessage i in temp)
      {

        if (i.IdIncidenta == id)
        {
          retVal.Add(i.Message);
        }

      }

      return Ok(retVal);
    }


    [HttpGet("/api/crud/getNumberIncidents")]
    public async Task<IActionResult> GetNumberIncidents()
    {
      int incidenti = this._context.Incidents.ToList().Count;
      int planRada = this._context.Nalozi.ToList().Count;
      int safetyDo = this._context.SafetyDocuments.ToList().Count;
      List<int> lista = new List<int>();

      lista.Add(incidenti);
      lista.Add(planRada);
      lista.Add(safetyDo);

      return Ok(lista);
    }

    #endregion

    #region SafetyDocuments

    [HttpPost("/api/crud/createSafetyDocument")]
    public async Task<IActionResult> CreateSafetyDoc([FromBody] SafetyDocDTO sdDTO)
    {

      PlanRada p = await this._context.Planovi.FindAsync(sdDTO.Id);
      if (p != null) {
        return BadRequest();
      }

      SafetyDoc sdPravi = new SafetyDoc();
      sdPravi.Id = sdDTO.Id;
      sdPravi.Status = sdDTO.Status;
      sdPravi.Detalji = sdDTO.Detalji;
      sdPravi.Beleske = sdDTO.Beleske;
      sdPravi.CreatedBy = sdDTO.CreatedBy;
      sdPravi.SafetyType = sdDTO.SafetyType;
      sdPravi.TelefonskiBroj = sdDTO.TelefonskiBroj;
      sdPravi.IdNalogaRada = sdDTO.PlanRadaId;
      sdPravi.Ekipa = p.Ekipa;

      this._context.SafetyDocChanges.Add(new SafetyDocChanges(sdPravi.Id, "Dodato :" + DateTime.Now.ToString()));
      this._context.SafetyDocuments.Add(sdPravi);
      await this._context.SaveChangesAsync();
      return Ok();

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
        sdFake.PlanRadaId = sd.IdNalogaRada;
        retValZaPrikaz.Add(sdFake);
      }


      return Ok(retValZaPrikaz);
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
        sddto.PlanRadaId = sd.IdNalogaRada;
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
        retVal.IdNalogaRada = sddto.PlanRadaId;

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



    #endregion

    #region WorkRequests

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
      a.IdIncidenta = nrdto.IdIncidenta;
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



    #endregion

    #region SwitchingPlans

    [HttpPost("api/crud/createPlan")]
    public async Task<IActionResult> CreatePlan([FromBody] PlanRadaDTO plandto)
    {


      if (plandto == null) {

        return BadRequest();
      }
      PlanRada plan = new PlanRada();

      NalogRada nr = await this._context.Nalozi.FindAsync(plandto.workRequestId);

      plan.Beleske = plandto.Beleske;
      plan.CreatedBy = plandto.CreatedBy;
      plan.CreatedOn = DateTime.Now;
      plan.Detalji = plandto.Detalji;
      plan.DocumentType = plandto.DocumentType;
      plan.Ekipa = plandto.crewId;
      plan.IdIncidenta = nr.IdIncidenta;
      plan.IdNalogaRada = plandto.workRequestId;
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
        nrdto.crewId = retVal.Ekipa;

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


    [HttpGet("/api/crud/getPlanovi")]
    public async Task<IActionResult> GetPlanovi()
    {

      List<PlanRada> planoviOrg = this._context.Planovi.ToList();
      List<PlanRadaDTO> planoviDTO = new List<PlanRadaDTO>();

      foreach (PlanRada p in planoviOrg)
      {
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


    [HttpGet("/api/crud/getPlanChanges/{id}")]
    [Authorize]
    public async Task<IActionResult> GetPlanChanges([FromRoute] string id)
    {


      if (id == null) {
        return BadRequest();
      }
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





    #endregion

    #region Calls

    [HttpPost("/api/crud/createPoziv")]
    public async Task<IActionResult> CreatePoziv([FromBody] PozivDTO pozDTO)
    {

      if (pozDTO==null) {
        return BadRequest();
      }

      Poziv p = new Poziv();

      p.Komentar = pozDTO.Komentar;
      p.Kvar = pozDTO.Kvar;
      p.Razlog = pozDTO.Razlog;
      p.UsernameKor = pozDTO.UsernameKor;
      p.Id = Guid.NewGuid().ToString();

      this._context.Pozivi.Add(p);

      await this._context.SaveChangesAsync();

      return Ok();

    }


    [HttpGet("/api/crud/getPozive")]
    [Authorize]
    public async Task<IActionResult> GetPozive()
    {
      List<Poziv> sviPozivi = this._context.Pozivi.ToList();

      List<PozivDTO> retPozivi = new List<PozivDTO>();

      foreach (Poziv p in sviPozivi)
      {
        PozivDTO pdto = new PozivDTO();

        pdto.Komentar = p.Komentar;
        pdto.Kvar = p.Kvar;
        pdto.Razlog = p.Razlog;
        pdto.UsernameKor = p.UsernameKor;

        retPozivi.Add(pdto);

      }


      return Ok(retPozivi);
    }


    [HttpGet("api/crud/getAllCallers")]
    [Authorize]
    public async Task<IActionResult> GetAllCallers()
    {
      List<User> temp = this._context.Users.ToList();
      List<User> retVal = new List<User>();
      foreach (User u in temp)
      {
        if (u.Approved == true && u.UserType == TipKorisnika.CLAN)
        {
          retVal.Add(u);

        }

      }
      return Ok(retVal);
    }




    #endregion

    #region Crew

    [HttpGet("api/crud/getCrews")]
    [Authorize]
    public async Task<IActionResult> GetCrews()
    {

      List<Ekipa> retVal = this._context.Ekipe.ToList();

      return Ok(retVal);
    }


    [HttpGet("api/crud/getFreeCrewMembers")]
    [Authorize]
    public async Task<IActionResult> GetFreeCrewmates()
    {

      List<User> all = this._context.Users.ToList();
      List<string> free = new List<string>();

      foreach (User u in all)
      {

        if (u.UserType == TipKorisnika.CLAN && u.IdEkipe == null && u.Approved == true)
        {
          free.Add(u.Username);

        }

      }

      return Ok(free);

    }


    [HttpPost("api/crud/createCrew")]
    [Authorize]
    public async Task<IActionResult> CreateCrew([FromBody] EkipaDTO edto)
    {

      if (edto == null)
      {
        return BadRequest();
      }
      Ekipa ek = new Ekipa();
      ek.IdEkipe = edto.IdEkipe;
      ek.NazivEkipe = edto.NazivEkipe;
      this._context.Ekipe.Add(ek);
      List<User> all = this._context.Users.ToList();
      foreach (string u in edto.usersId)
      {
        foreach (User ui in all)
        {
          if (ui.Username == u)
          {
            this._context.Attach(ui);
            ui.IdEkipe = edto.IdEkipe;
          }

        }

      }
      await this._context.SaveChangesAsync();
      return Ok();
    }


    [HttpPost("api/crud/deleteCrew/{id}")]
    [Authorize]
    public async Task<IActionResult> DeleteCrew([FromRoute] string id)
    {
      Ekipa e = await this._context.Ekipe.FindAsync(id);

      if (e == null)
      {
        return BadRequest();
      }

      List<User> all = this._context.Users.ToList();
      foreach (User u in all)
      {

        if (u.UserType == TipKorisnika.CLAN)
        {
          if (u.IdEkipe == e.IdEkipe)
          {
            this._context.Attach(u);
            u.IdEkipe = null;
          }
        }
      }
      this._context.Remove(e);
      await this._context.SaveChangesAsync();
      return Ok();
    }


    [HttpGet("api/crud/getCrewMembers/{id}")]
    [Authorize]
    public async Task<IActionResult> GetCrewMembers([FromRoute] string id)
    {

      List<User> all = this._context.Users.ToList();
      List<User> retVal = new List<User>();

      foreach (User u in all)
      {
        if (u.UserType == TipKorisnika.CLAN)
        {
          if (u.IdEkipe == id)
          {

            retVal.Add(u);
          }

        }

      }

      return Ok(retVal);
    }


    #endregion

    #region Devices

    [HttpPost("/api/crud/createElement")]
    public async Task<IActionResult> CreateElement([FromBody] Element element)
    {

      this._context.Elements.Add(element);
      await this._context.SaveChangesAsync();
      return Ok();
    }

    [HttpPost("/api/crud/deleteDevice/{id}")]
    [Authorize]
    public async Task<IActionResult> DeleteDevice([FromRoute] string id)
    {
      Element retVal = await this._context.Elements.FindAsync(id);
      if (retVal != null)
      {
        this._context.Elements.Remove(retVal);
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

    #endregion

    #region Notifications

    [HttpPost("/api/crud/createMessage")]
    [Authorize]
    public async Task<IActionResult> CreateMessage([FromBody] PorukaDTO pdto) {

      if (pdto == null) {
        return BadRequest();
      }
      Poruka p = new Poruka();
      p.IdPoruke = Guid.NewGuid().ToString();
      p.IdKorisnika = pdto.IdKorisnika;
      p.Procitana = pdto.Procitana;
      p.Tip = pdto.Tip;
      p.Sadrzaj = pdto.Sadrzaj;


      this._context.Poruke.Add(p);
      await this._context.SaveChangesAsync();

      return Ok();
    }


    [HttpGet("/api/crud/getReadNotificationsByUsername/{username}")]
    public async Task<IActionResult> GetReadNotificationsByUsername([FromRoute] string username)
    {
      List<Poruka> sveNotifikacije = this._context.Poruke.ToList();

      List<Poruka> trazeneNotifikacije = new List<Poruka>();

      foreach(Poruka p in sveNotifikacije)
      {
        if (p.IdKorisnika == username && p.Procitana==true)
        {
          trazeneNotifikacije.Add(p);
        }
      }


      List<PorukaDTO> trazeneNotifikacijeFinal = new List<PorukaDTO>();

      foreach (Poruka p in trazeneNotifikacije)
      {
        PorukaDTO pdto = new PorukaDTO();

        pdto.IdKorisnika = p.IdKorisnika;
        pdto.Procitana = p.Procitana;
        pdto.Sadrzaj = p.Sadrzaj;
        pdto.Tip = p.Tip;
        pdto.IdPoruke = p.IdPoruke;

        trazeneNotifikacijeFinal.Add(pdto);
      }


      return Ok(trazeneNotifikacijeFinal);
    }


    [HttpGet("/api/crud/getUnreadNotificationsByUsername/{username}")]
    public async Task<IActionResult> GetUnreadNotificationsByUsername([FromRoute] string username)
    {
      List<Poruka> sveNotifikacije = this._context.Poruke.ToList();

      List<Poruka> trazeneNotifikacije = new List<Poruka>();

      foreach (Poruka p in sveNotifikacije)
      {
        if (p.IdKorisnika == username && p.Procitana == false)
        {
          trazeneNotifikacije.Add(p);
        }
      }


      List<PorukaDTO> trazeneNotifikacijeFinal = new List<PorukaDTO>();

      foreach (Poruka p in trazeneNotifikacije)
      {
        PorukaDTO pdto = new PorukaDTO();

        pdto.IdKorisnika = p.IdKorisnika;
        pdto.Procitana = p.Procitana;
        pdto.Sadrzaj = p.Sadrzaj;
        pdto.Tip = p.Tip;
        pdto.IdPoruke = p.IdPoruke;

        trazeneNotifikacijeFinal.Add(pdto);
      }


      return Ok(trazeneNotifikacijeFinal);
    }


    [HttpGet("/api/crud/getSuccessNotificationsByUsername/{username}")]
    public async Task<IActionResult> GetSuccessNotificationsByUsername([FromRoute] string username)
    {
      List<Poruka> sveNotifikacije = this._context.Poruke.ToList();

      List<Poruka> trazeneNotifikacije = new List<Poruka>();

      foreach (Poruka p in sveNotifikacije)
      {
        if (p.IdKorisnika == username && p.Tip=="Success" && p.Procitana==true)
        {
          trazeneNotifikacije.Add(p);
        }
      }


      List<PorukaDTO> trazeneNotifikacijeFinal = new List<PorukaDTO>();

      foreach (Poruka p in trazeneNotifikacije)
      {
        PorukaDTO pdto = new PorukaDTO();

        pdto.IdKorisnika = p.IdKorisnika;
        pdto.Procitana = p.Procitana;
        pdto.Sadrzaj = p.Sadrzaj;
        pdto.Tip = p.Tip;
        pdto.IdPoruke = p.IdPoruke;

        trazeneNotifikacijeFinal.Add(pdto);
      }


      return Ok(trazeneNotifikacijeFinal);
    }


    [HttpGet("/api/crud/getErrorNotificationsByUsername/{username}")]
    public async Task<IActionResult> GetErrorNotificationsByUsername([FromRoute] string username)
    {
      List<Poruka> sveNotifikacije = this._context.Poruke.ToList();

      List<Poruka> trazeneNotifikacije = new List<Poruka>();

      foreach (Poruka p in sveNotifikacije)
      {
        if (p.IdKorisnika == username && p.Tip == "Error" && p.Procitana==true)
        {
          trazeneNotifikacije.Add(p);
        }
      }


      List<PorukaDTO> trazeneNotifikacijeFinal = new List<PorukaDTO>();

      foreach (Poruka p in trazeneNotifikacije)
      {
        PorukaDTO pdto = new PorukaDTO();

        pdto.IdKorisnika = p.IdKorisnika;
        pdto.Procitana = p.Procitana;
        pdto.Sadrzaj = p.Sadrzaj;
        pdto.Tip = p.Tip;
        pdto.IdPoruke = p.IdPoruke;

        trazeneNotifikacijeFinal.Add(pdto);
      }


      return Ok(trazeneNotifikacijeFinal);
    }

    [HttpPost("/api/crud/makeNotificationRead/{id}")]
    [Authorize]
    public async Task<IActionResult> MakeNotificationRead([FromRoute]  string id)
    {

      Poruka eBasOva =  await this._context.Poruke.FindAsync(id);

      this._context.Attach(eBasOva);

      eBasOva.Procitana = true;

      await this._context.SaveChangesAsync();

      return Ok();
    }

    #endregion

    #region Resolution
    [HttpPost("/api/crud/createResolution")]
    public async Task<IActionResult> CreateResolution([FromBody] Resolution res) {

      if (res==null) {
        return BadRequest();
      }
      res.IdRes = Guid.NewGuid().ToString();
      this._context.Resolutions.Add(res);
      await this._context.SaveChangesAsync();
      return Ok();
    }

    #endregion

    [HttpGet("/api/crud/search/{id}")]
    public async Task<IActionResult> Search([FromRoute] string id) {


      Incident i = await this._context.Incidents.FindAsync(id);
      List<string> retval = new List<string>();
      retval.Add(id);
      if (i != null) {
        retval.Add("Incident");
        return Ok(retval);
      }

      NalogRada nr = await this._context.Nalozi.FindAsync(id);
      if (nr != null)
      {
        retval.Add("Work Request");
        return Ok(retval);
      }
      PlanRada pr = await this._context.Planovi.FindAsync(id);
      if (pr != null)
      {
        retval.Add("Switching Plan");
        return Ok(retval);
      }

      SafetyDoc sd = await this._context.SafetyDocuments.FindAsync(id);
      if (sd != null)
      {
        retval.Add("Safety Document");
        return Ok(retval);
      }


      Element e = await this._context.Elements.FindAsync(id);
      if (e != null)
      {
        retval.Add("Device");
        return Ok(retval);
      }

      return BadRequest();
    }


    [HttpGet("/api/crud/getAllByUsername")]
    [Authorize]
    public async Task<IActionResult> GetAllByUsername()
    {
      int retVal1 = this._context.Incidents.ToList().Count;
      int retVal2 = this._context.Nalozi.ToList().Count;
      int retVal3 = this._context.Planovi.ToList().Count;
      int retVal4 = this._context.SafetyDocuments.ToList().Count;

      List<int> rez = new List<int>();
      rez.Add(retVal1);
      rez.Add(retVal2);
      rez.Add(retVal3);
      rez.Add(retVal4);


      return Ok(rez);
    }



  }
}
