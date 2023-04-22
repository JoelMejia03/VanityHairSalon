using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using API_VanityHairSalon.Models;
using System.Linq.Expressions;

namespace API_VanityHairSalon.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SignUpController : ControllerBase
    {
        private readonly VanityHairSalonContext _context;

        public SignUpController(VanityHairSalonContext context)
        {
            _context = context;
        }

        [HttpPost("CrearPersona")]
        public async Task<IActionResult> CrearPersona([FromBody] Persona persona, string clave, string cliCedula)
        {
            if (string.IsNullOrWhiteSpace(clave))
            {
                return BadRequest("Debe proporcionar una clave para el usuario.");
            }
            try
            {
                var user = _context.Personas.FirstOrDefault(option => option.Identificacion == cliCedula);
                if (user != null) return BadRequest();


                //Crear un nuevo Usuario con los datos recibidos del form
                var usuario = new Usuario
                {
                    Clave = clave,
                    IdRol = 4,
                    Estatus = "Activo"
                };

                //Guardar el objeto Usuario
                _context.Usuarios.Add(usuario);
                await _context.SaveChangesAsync();

                //"Recuperar" el IdUsuario generado por la BD
                var idUsuario = usuario.IdUsuario;

                //Asignar el valor de IdUsuario al objeto Persona
                persona.IdUsuario = idUsuario;

                //Guardar el objeto Persona
                _context.Personas.Add(persona);
                await _context.SaveChangesAsync();

                return Ok();
            }

            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}