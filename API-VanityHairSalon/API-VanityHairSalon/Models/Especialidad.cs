using System;
using System.Collections.Generic;

namespace API_VanityHairSalon.Models;

public partial class Especialidad
{
    public int IdEspecialidad { get; set; }

    public string Nombre { get; set; } = null!;

    public string Descripcion { get; set; } = null!;

    public string Estatus { get; set; }

    public virtual ICollection<Empleado> Empleados { get; } = new List<Empleado>();
}
