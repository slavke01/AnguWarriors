using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace AnguWarriorsBack.Migrations
{
    public partial class MigracijaNalog : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Nalog",
                columns: table => new
                {
                    IdNaloga = table.Column<string>(nullable: false),
                    NalogType = table.Column<int>(nullable: false),
                    Status = table.Column<string>(maxLength: 255, nullable: false),
                    IdIncidenta = table.Column<string>(maxLength: 255, nullable: false),
                    Ulica = table.Column<string>(maxLength: 255, nullable: false),
                    PocetakRada = table.Column<DateTime>(nullable: false),
                    KrajRada = table.Column<DateTime>(nullable: false),
                    Svrha = table.Column<string>(maxLength: 255, nullable: false),
                    Beleske = table.Column<string>(maxLength: 255, nullable: false),
                    Hitno = table.Column<bool>(nullable: false),
                    Kompanija = table.Column<string>(maxLength: 255, nullable: false),
                    TelefonskiBroj = table.Column<string>(maxLength: 255, nullable: false),
                    CreatedBy = table.Column<string>(maxLength: 255, nullable: false),
                    CreatedTime = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Nalog", x => x.IdNaloga);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Nalog");
        }
    }
}
