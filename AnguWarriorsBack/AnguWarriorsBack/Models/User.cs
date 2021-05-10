using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AnguWarriorsBack.Models
{
    public class User
    {
        public string Username { get; set; }
        public string Password { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime DatumRodjenja { get; set; }
        public string Adress { get; set; }
        public string EMail { get; set; }
        public TipKorisnika UserType { get; set; }


        public User() { }
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
    }
}
