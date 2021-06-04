using Microsoft.EntityFrameworkCore.Migrations;

namespace AnguWarriorsBack.Migrations
{
    public partial class IncidentState : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "IncidentChanges",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    IdIncidenta = table.Column<string>(nullable: false),
                    Message = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_IncidentChanges", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "IncidentChanges");
        }
    }
}
