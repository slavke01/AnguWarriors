using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AnguWarriorsBack.Models
{
    public class NalogRada
    {

        public string IdNaloga { get; set; }
        public TipRada NalogType { get; set; }
        public string Status { get; set; }
        public string IdIncidenta { get; set; }
        public string Ulica { get; set; }
        public DateTime PocetakRada { get; set; }
        public DateTime KrajRada { get; set; }
        public string CreatedBy { get; set; }
        public string Svrha { get; set; }
        public string Beleske { get; set; }
        public bool Hitno { get; set; }
        public string Kompanija { get; set; }
        public string TelefonskiBroj { get; set; }
        public DateTime CreatedTime { get; set; }

        public NalogRada() { }
        public NalogRada(string idNaloga,TipRada type, string status,string id,string ulica,DateTime pocetak,DateTime kraj, string createdby,string svrha,string beleske,bool hitno,string kompanija,string broj,DateTime created) {
            this.NalogType = type;
            this.IdNaloga = idNaloga;
            this.Status = status;
            this.IdIncidenta = id;
            this.Ulica = ulica;
            this.PocetakRada = pocetak;
            this.KrajRada = kraj;
            this.CreatedBy = createdby;
            this.Svrha = svrha;
            this.Beleske = beleske;
            this.Hitno = hitno;
            this.Kompanija = kompanija;
            this.TelefonskiBroj = broj;
            this.CreatedTime = created;


        }
    }
}
