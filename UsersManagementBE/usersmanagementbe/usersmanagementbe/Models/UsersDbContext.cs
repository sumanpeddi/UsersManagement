using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;



namespace usersmanagementbe.Models
{
    public class UsersDbContext : DbContext
    {


        public UsersDbContext(DbContextOptions<UsersDbContext> options)
            : base(options)
        {

        }

        public virtual DbSet<UserInfo>? UserInfos { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<UserInfo>().HasData(new UserInfo
            {
                UserId = 1,
                UserName = "suman",
                FirstName = "Suman",
                LastName = "Peddi",
                Email = "sumanpeddi@gmail.com",
                Role = "admin",
                Password = "suman123"

            });
            base.OnModelCreating(modelBuilder);

        }
    }
}
