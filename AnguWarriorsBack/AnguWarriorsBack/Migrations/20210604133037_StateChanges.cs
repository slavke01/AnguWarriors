using Microsoft.EntityFrameworkCore.Migrations;

namespace AnguWarriorsBack.Migrations
{
    public partial class StateChanges : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "NalogRadaChanges",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    IdIncidenta = table.Column<string>(nullable: false),
                    Message = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_NalogRadaChanges", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "PlanRadaChanges",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    IdIncidenta = table.Column<string>(nullable: false),
                    Message = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PlanRadaChanges", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "NalogRadaChanges");

            migrationBuilder.DropTable(
                name: "PlanRadaChanges");
        }
    }
}
