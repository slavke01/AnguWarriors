using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AnguWarriorsBack.Models
{
    public class Element
    {

        public TipElementa ElementType { get; set; }
        public string ID { get; set; }
        public string Naziv { get; set; }
        public string Adress { get; set; }
        public string Koordinate { get; set; } //Ovo mozda nije string ali neka stoji za sad

        public Element() { }
        public Element(TipElementa el,string id,string naziv,string adresa,string koord) {
            this.ElementType = el;
            this.ID = id;
            this.Naziv = naziv;
            this.Adress = adresa;
            this.Koordinate = koord;

        }
    }
}
