using System;
using System.Collections.Generic;

namespace API_VanityHairSalon.Models;

public partial class Empleado
{
    public int IdEmpleado { get; set; }

    public string Identificacion { get; set; } = null!;

    public int IdEspecialidad { get; set; }

    public string Estatus { get; set; }

    public virtual ICollection<Cita> Cita { get; } = new List<Cita>();

    public virtual Especialidad? IdEspecialidadNavigation { get; set; } = null!;

    public virtual Persona? IdentificacionNavigation { get; set; } = null!;
}
