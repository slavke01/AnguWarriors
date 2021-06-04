using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace AnguWarriorsBack.Migrations
{
    public partial class safetyDocsMigr : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "SafetyDocuments",
                columns: table => new
                {
                    IdSafety = table.Column<string>(nullable: false),
                    SafetyType = table.Column<int>(nullable: false),
                    Status = table.Column<string>(maxLength: 255, nullable: false),
                    CreatedBy = table.Column<string>(maxLength: 255, nullable: false),
                    IdNalogaRada = table.Column<string>(maxLength: 255, nullable: false),
                    Ekipa = table.Column<string>(maxLength: 255, nullable: false),
                    Detalji = table.Column<string>(maxLength: 255, nullable: false),
                    Beleske = table.Column<string>(maxLength: 255, nullable: false),
                    TelefonskiBroj = table.Column<string>(maxLength: 255, nullable: false),
                    CreatedOn = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SafetyDocuments", x => x.IdSafety);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "SafetyDocuments");
        }
    }
}
