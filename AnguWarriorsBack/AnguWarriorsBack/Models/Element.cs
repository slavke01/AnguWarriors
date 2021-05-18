using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AnguWarriorsBack.Models
{
    [Table("Elements")]
    public class Element
    {

        [Key]
        public string ID { get; set; }
        [Required]
        public string Naziv { get; set; }
        [Required]
        public string Adress { get; set; }
        [Required]
        public string Koordinate { get; set; } //Ovo mozda nije string ali neka stoji za sad
        [Required]
        public TipElementa ElementType { get; set; }


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
