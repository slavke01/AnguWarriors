using Microsoft.EntityFrameworkCore.Migrations;

namespace AnguWarriorsBack.Migrations
{
    public partial class MinorFixes : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Users_Ekipe_IdEkipe",
                table: "Users");

            migrationBuilder.DropIndex(
                name: "IX_Users_IdEkipe",
                table: "Users");

            migrationBuilder.AlterColumn<string>(
                name: "IdEkipe",
                table: "Users",
                nullable: true,
                oldClrType: typeof(string),
                oldNullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "IdEkipe",
                table: "Users",
                nullable: true,
                oldClrType: typeof(string),
                oldNullable: true);

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
    }
}
