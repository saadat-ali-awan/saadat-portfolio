/*
  Warnings:

  - You are about to drop the column `email` on the `BackendUser` table. All the data in the column will be lost.
  - You are about to drop the column `emailVerified` on the `BackendUser` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `BackendUser` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[password]` on the table `BackendUser` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `password` to the `BackendUser` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `BackendUser` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "BackendUser_email_key";

-- AlterTable
ALTER TABLE "BackendUser" DROP COLUMN "email",
DROP COLUMN "emailVerified",
ADD COLUMN     "password" TEXT NOT NULL,
ALTER COLUMN "name" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "BackendUser_name_key" ON "BackendUser"("name");

-- CreateIndex
CREATE UNIQUE INDEX "BackendUser_password_key" ON "BackendUser"("password");
