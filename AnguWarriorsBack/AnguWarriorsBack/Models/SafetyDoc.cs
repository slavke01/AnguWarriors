using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AnguWarriorsBack.Models
{
    public class SafetyDoc
    {

        public string IdSafety { get; set; }
        public TipRada SafetyType { get; set; }
        public string Status { get; set; }
        public string CreatedBy { get; set; }
        public string IdNalogaRada { get; set; }
        public string Ekipa { get; set; } // Uzimamo iz naloga za rad
        public string Detalji { get; set; }
        public string Beleske { get; set; }
        public string TelefonskiBroj { get; set; }
        public DateTime CreatedOn { get; set; }


        public SafetyDoc() { }
        public SafetyDoc(string id,TipRada tip, string status, string createdby,string idnalogarada,string ekipa,string detalji,string beleske,string telefon,DateTime createdon) {

            this.IdSafety = id;
            this.SafetyType = tip;
            this.Status = status;
            this.CreatedBy = createdby;
            this.IdNalogaRada = idnalogarada;
            this.Ekipa = ekipa;
            this.Detalji = detalji;
            this.Beleske = beleske;
            this.TelefonskiBroj = telefon;
            this.CreatedOn = createdon;


        }
    }
}
