using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AnguWarriorsBack.Models
{
  public class ChangePasswordDTO
  {


    public string Username { get; set; }
    public string OldPassword { get; set; }
    public string NewPassword { get; set; }


    public ChangePasswordDTO() { }
  }
}
