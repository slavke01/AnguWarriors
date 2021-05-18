using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace AnguWarriorsBack.Migrations
{
    public partial class Incidents : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Incidents",
                columns: table => new
                {
                    ID = table.Column<string>(nullable: false),
                    IncidentType = table.Column<int>(nullable: false),
                    Prioritet = table.Column<int>(nullable: false),
                    Confirmed = table.Column<bool>(nullable: false),
                    Status = table.Column<string>(maxLength: 255, nullable: false),
                    ETA = table.Column<DateTime>(nullable: false),
                    ATA = table.Column<DateTime>(nullable: false),
                    ETR = table.Column<DateTime>(nullable: false),
                    VrijemeRada = table.Column<DateTime>(nullable: false),
                    AffectedPeople = table.Column<int>(nullable: false),
                    Pozivi = table.Column<int>(nullable: false),
                    Voltage = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Incidents", x => x.ID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Incidents");
        }
    }
}
