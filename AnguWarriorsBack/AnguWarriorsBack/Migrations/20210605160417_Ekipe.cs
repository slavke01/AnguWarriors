using Microsoft.EntityFrameworkCore.Migrations;

namespace AnguWarriorsBack.Migrations
{
    public partial class Ekipe : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "IdEkipe",
                table: "Users",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Ekipe",
                columns: table => new
                {
                    IdEkipe = table.Column<string>(nullable: false),
                    NazivEkipe = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Ekipe", x => x.IdEkipe);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Users_IdEkipe",
                table: "Users",
                column: "IdEkipe");

            migrationBuilder.AddForeignKey(
                name: "FK_Users_Ekipe_IdEkipe",
                table: "Users",
                column: "IdEkipe",
                principalTable: "Ekipe",
                principalColumn: "IdEkipe",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Users_Ekipe_IdEkipe",
                table: "Users");

            migrationBuilder.DropTable(
                name: "Ekipe");

            migrationBuilder.DropIndex(
                name: "IX_Users_IdEkipe",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "IdEkipe",
                table: "Users");
        }
    }
}
