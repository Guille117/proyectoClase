using back117.Models;
using Microsoft.EntityFrameworkCore;

namespace back117
{
    public class AplicationDbComentario:DbContext
    {
        public DbSet<Comentario> Comentarios { get; set; }

        public AplicationDbComentario(DbContextOptions<AplicationDbComentario> options) : base(options) { }
    }
}
