using System;
using System.Collections.Generic;

namespace API_VanityHairSalon.Models;

public partial class Usuario
{
    public int IdUsuario { get; set; }

    public string Clave { get; set; } = null!;

    public int IdRol { get; set; }

    public string Estatus { get; set; }

    public virtual Rol? IdRolNavigation { get; set; } = null!;

    public virtual ICollection<Persona> Personas { get; } = new List<Persona>();

}
