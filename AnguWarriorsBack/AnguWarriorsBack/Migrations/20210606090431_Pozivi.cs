using Microsoft.EntityFrameworkCore.Migrations;

namespace AnguWarriorsBack.Migrations
{
    public partial class Pozivi : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Pozivi",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    Razlog = table.Column<string>(maxLength: 255, nullable: false),
                    Komentar = table.Column<string>(maxLength: 255, nullable: false),
                    Kvar = table.Column<string>(maxLength: 255, nullable: false),
                    UsernameKor = table.Column<string>(maxLength: 255, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Pozivi", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Pozivi");
        }
    }
}
