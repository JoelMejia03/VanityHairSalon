using System;
using System.Collections.Generic;

namespace API_VanityHairSalon.Models;

public partial class Persona
{
    public string Nombre { get; set; } = null!;

    public string Apellido { get; set; } = null!;

    public string Telefono { get; set; } = null!;

    public string Identificacion { get; set; } = null!;

    public string Correo { get; set; } = null!;

    public int IdTipoIde { get; set; }

    public int? IdUsuario { get; set; }

    public virtual ICollection<Cita> Cita { get; } = new List<Cita>();

    public virtual ICollection<Cliente> Clientes { get; } = new List<Cliente>();

    public virtual ICollection<Empleado> Empleados { get; } = new List<Empleado>();

    public virtual TipoIdentificacion? IdTipoIdeNavigation { get; set; } = null!;

    public virtual Usuario? IdUsuarioNavigation { get; set; }
}
