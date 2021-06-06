using Microsoft.EntityFrameworkCore.Migrations;

namespace AnguWarriorsBack.Migrations
{
    public partial class Resolution : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Resolutions",
                columns: table => new
                {
                    IdRes = table.Column<string>(nullable: false),
                    Cause = table.Column<string>(nullable: false),
                    SubCause = table.Column<string>(nullable: false),
                    Construction = table.Column<string>(nullable: false),
                    Material = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Resolutions", x => x.IdRes);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Resolutions");
        }
    }
}
