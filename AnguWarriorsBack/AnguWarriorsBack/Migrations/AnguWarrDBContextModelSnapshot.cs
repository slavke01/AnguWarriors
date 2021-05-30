﻿// <auto-generated />
using System;
using AnguWarriorsBack.DataBase;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace AnguWarriorsBack.Migrations
{
    [DbContext(typeof(AnguWarrDBContext))]
    partial class AnguWarrDBContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.14-servicing-32113")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("AnguWarriorsBack.Models.Element", b =>
                {
                    b.Property<string>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Adress")
                        .IsRequired();

                    b.Property<int>("ElementType");

                    b.Property<string>("Latitude")
                        .IsRequired();

                    b.Property<string>("Longitude")
                        .IsRequired();

                    b.Property<string>("Naziv")
                        .IsRequired();

                    b.HasKey("ID");

                    b.ToTable("Elements");
                });

            modelBuilder.Entity("AnguWarriorsBack.Models.Incident", b =>
                {
                    b.Property<string>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("ATA");

                    b.Property<int>("AffectedPeople");

                    b.Property<bool>("Confirmed");

                    b.Property<DateTime>("ETA");

                    b.Property<DateTime>("ETR");

                    b.Property<int>("IncidentType");

                    b.Property<int>("Pozivi");

                    b.Property<int>("Prioritet");

                    b.Property<string>("Status")
                        .IsRequired()
                        .HasMaxLength(255);

                    b.Property<int>("Voltage");

                    b.Property<DateTime>("VrijemeRada");

                    b.HasKey("ID");

                    b.ToTable("Incidents");
                });

            modelBuilder.Entity("AnguWarriorsBack.Models.NalogRada", b =>
                {
                    b.Property<string>("IdNaloga")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Beleske")
                        .IsRequired()
                        .HasMaxLength(255);

                    b.Property<string>("CreatedBy")
                        .IsRequired()
                        .HasMaxLength(255);

                    b.Property<DateTime>("CreatedTime");

                    b.Property<bool>("Hitno");

                    b.Property<string>("IdIncidenta")
                        .IsRequired()
                        .HasMaxLength(255);

                    b.Property<string>("Kompanija")
                        .IsRequired()
                        .HasMaxLength(255);

                    b.Property<DateTime>("KrajRada");

                    b.Property<int>("NalogType");

                    b.Property<DateTime>("PocetakRada");

                    b.Property<string>("Status")
                        .IsRequired()
                        .HasMaxLength(255);

                    b.Property<string>("Svrha")
                        .IsRequired()
                        .HasMaxLength(255);

                    b.Property<string>("TelefonskiBroj")
                        .IsRequired()
                        .HasMaxLength(255);

                    b.Property<string>("Ulica")
                        .IsRequired()
                        .HasMaxLength(255);

                    b.HasKey("IdNaloga");

                    b.ToTable("Nalog");
                });

            modelBuilder.Entity("AnguWarriorsBack.Models.PlanRada", b =>
                {
                    b.Property<string>("IdPlana")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Beleske")
                        .IsRequired()
                        .HasMaxLength(255);

                    b.Property<string>("CreatedBy")
                        .IsRequired()
                        .HasMaxLength(255);

                    b.Property<DateTime>("CreatedOn");

                    b.Property<string>("Detalji")
                        .IsRequired()
                        .HasMaxLength(255);

                    b.Property<int>("DocumentType");

                    b.Property<string>("Ekipa")
                        .IsRequired()
                        .HasMaxLength(255);

                    b.Property<string>("IdIncidenta")
                        .IsRequired()
                        .HasMaxLength(255);

                    b.Property<string>("IdNalogaRada")
                        .IsRequired()
                        .HasMaxLength(255);

                    b.Property<string>("Kompanija")
                        .IsRequired()
                        .HasMaxLength(255);

                    b.Property<DateTime>("KrajRada");

                    b.Property<DateTime>("PocetakRada");

                    b.Property<string>("Status")
                        .IsRequired()
                        .HasMaxLength(255);

                    b.Property<string>("Svrha")
                        .IsRequired();

                    b.Property<string>("TelefonskiBroj")
                        .IsRequired()
                        .HasMaxLength(255);

                    b.Property<string>("Ulica")
                        .IsRequired()
                        .HasMaxLength(255);

                    b.HasKey("IdPlana");

                    b.ToTable("Planovi");
                });

            modelBuilder.Entity("AnguWarriorsBack.Models.User", b =>
                {
                    b.Property<string>("Username")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Adress")
                        .IsRequired()
                        .HasMaxLength(255);

                    b.Property<bool>("Approved");

                    b.Property<DateTime>("DatumRodjenja");

                    b.Property<string>("EMail")
                        .IsRequired()
                        .HasMaxLength(255);

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasMaxLength(255);

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasMaxLength(255);

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasMaxLength(255);

                    b.Property<int>("UserType");

                    b.HasKey("Username");

                    b.ToTable("Users");
                });
#pragma warning restore 612, 618
        }
    }
}
