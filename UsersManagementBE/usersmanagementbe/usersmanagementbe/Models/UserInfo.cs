using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace usersmanagementbe.Models
{
    public class UserInfo
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int UserId { get; set; }

        public string? Role { get ; set; }
        public string? CustomerType { get; set; }

        [Required]
        [MaxLength(15)]
        public string? UserName { get; set; }

        [EmailAddress]
        public string? Email { get; set; }

        [Required]
        [MaxLength(15)]
        [DataType(DataType.Password)]
        public string? Password { get; set; }

        [MaxLength(30)]
        public string? FirstName { get; set; }

        [MaxLength(30)]
        public string? LastName { get; set; }
        public DateTime? CreatedDate { get; set; }
    }
}
