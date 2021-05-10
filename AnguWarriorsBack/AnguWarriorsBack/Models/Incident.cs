using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AnguWarriorsBack.Models
{
    public class Incident
    {



        public string ID { get; set; }
        public TipIncidenta IncidentType { get; set; }
        public int Prioritet { get; set; }
        public bool Confirmed { get; set; }
        public string Status { get; set; }
        public DateTime ETA { get; set; }
        public DateTime ATA { get; set; }
        public DateTime ETR { get; set; }
        public DateTime VrijemeRada { get; set; }
        public int AffectedPeople { get; set; }
        public int Pozivi { get; set; }
        public int Voltage { get; set; }


        public Incident() { }
        public Incident(string id,TipIncidenta tip,int prio,bool conf,string status,DateTime eta,DateTime ata,DateTime etr,DateTime vrijeme,int aff,int pozivi,int voltage) {

            this.ID = id;
            this.IncidentType = tip;
            this.Prioritet = prio;
            this.Confirmed = conf;
            this.Status = status;
            this.ETA = eta;
            this.ATA = ata;
            this.ETR = etr;
            this.VrijemeRada = vrijeme;
            this.AffectedPeople = aff;
            this.Pozivi = pozivi;
            this.Voltage = voltage;



        }
    }
}
