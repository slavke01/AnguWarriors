using Microsoft.EntityFrameworkCore.Migrations;

namespace AnguWarriorsBack.Migrations
{
    public partial class SafetyChanges : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "SafetyDocCHanges",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    IdIncidenta = table.Column<string>(nullable: false),
                    Message = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SafetyDocCHanges", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "SafetyDocCHanges");
        }
    }
}
