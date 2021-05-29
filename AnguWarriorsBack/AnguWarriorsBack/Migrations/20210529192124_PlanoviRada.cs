using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace AnguWarriorsBack.Migrations
{
    public partial class PlanoviRada : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Planovi",
                columns: table => new
                {
                    IdPlana = table.Column<string>(nullable: false),
                    DocumentType = table.Column<int>(nullable: false),
                    IdNalogaRada = table.Column<string>(maxLength: 255, nullable: false),
                    Status = table.Column<string>(maxLength: 255, nullable: false),
                    IdIncidenta = table.Column<string>(maxLength: 255, nullable: false),
                    Ulica = table.Column<string>(maxLength: 255, nullable: false),
                    PocetakRada = table.Column<DateTime>(nullable: false),
                    KrajRada = table.Column<DateTime>(nullable: false),
                    Ekipa = table.Column<string>(maxLength: 255, nullable: false),
                    CreatedBy = table.Column<string>(maxLength: 255, nullable: false),
                    Svrha = table.Column<string>(nullable: false),
                    Detalji = table.Column<string>(maxLength: 255, nullable: false),
                    Beleske = table.Column<string>(maxLength: 255, nullable: false),
                    Kompanija = table.Column<string>(maxLength: 255, nullable: false),
                    TelefonskiBroj = table.Column<string>(maxLength: 255, nullable: false),
                    CreatedOn = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Planovi", x => x.IdPlana);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Planovi");
        }
    }
}
