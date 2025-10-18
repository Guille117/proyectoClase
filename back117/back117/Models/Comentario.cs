using System.ComponentModel.DataAnnotations;

namespace back117.Models
{
    public class Comentario
    {
        public int Id { get; set; }


        [Required]
        public string Titulo { get; set; }

        [Required]
        public string Creador { get; set; }

        [Required]
        public string Texto { get; set; }

        [Required]
        public DateTime FechaCreacion { get; set; }
    }
}
