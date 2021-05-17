using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AnguWarriorsBack.Models
{
    [Table("Users")]
    public class User
    {

        [Key]

        public string Username { get; set; }

        [Required]
        [StringLength(255)]
        public string Password { get; set; }
        [Required]
        [StringLength(255)]
        public string FirstName { get; set; }
        [Required]
        [StringLength(255)]
        public string LastName { get; set; }
        [Required]
        public DateTime DatumRodjenja { get; set; }
        [Required]
        [StringLength(255)]
        public string Adress { get; set; }
        [Required]
        [StringLength(255)]
        public string EMail { get; set; }
        [Required]
        public TipKorisnika UserType { get; set; }


        public User() { }
        /*
        public User(string username,string pw,string first,string last,DateTime datum,string adress,string email,TipKorisnika tip) {

            this.Username = username;
            this.Password = pw;
            this.FirstName = first;
            this.LastName = last;
            this.DatumRodjenja = datum;
            this.Adress = adress;
            this.EMail = email;
            this.UserType = tip;
        }
        */
    }
}
