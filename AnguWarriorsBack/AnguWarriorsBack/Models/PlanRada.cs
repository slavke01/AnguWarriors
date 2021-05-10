using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AnguWarriorsBack.Models
{
    public class PlanRada
    {


        public TipRada DocumentType { get; set; }
        public string IdNalogaRada { get; set; }
        public string  Status { get; set; }
        public string IdIncidenta { get; set; }
        public string  Ulica { get; set; }
        public DateTime PocetakRada { get; set; }
        public DateTime KrajRada { get; set; }
        public string  Ekipa { get; set; }
        public string CreatedBy { get; set; }
        public string Svrha { get; set; }
        public string Beleske { get; set; }
        public string Kompanija { get; set; }
        public string TelefonskiBroj { get; set; }
        public DateTime CreatedOn { get; set; }

        public PlanRada() { }
        public PlanRada(TipRada type,string idNaloga,string status,string idInc,string ulica,DateTime pocetak,DateTime kraj,string ekipa,string createdBy,string svrha,string belekse,
            string kompanija,string telefonskibroj,DateTime createdon) {

            this.DocumentType = type;
            this.IdNalogaRada = idNaloga;
            this.Status = status;
            this.IdIncidenta = idInc;
            this.Ulica = ulica;
            this.PocetakRada = pocetak;
            this.KrajRada = kraj;
            this.Ekipa = ekipa;
            this.CreatedBy = createdBy;
            this.Svrha = svrha;
            this.Beleske = belekse;
            this.Kompanija = kompanija;
            this.TelefonskiBroj = telefonskibroj;
            this.CreatedOn = createdon;


        }



    }
}
