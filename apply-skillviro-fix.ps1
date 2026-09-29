$ErrorActionPreference = "Stop"

Write-Host "SkillViro fix: applying project files..." -ForegroundColor Cyan

$base = Get-Location

$files = @(
  "src/app/models/project.model.ts",
  "src/app/services/project.service.ts",
  "src/app/pages/projects/projects.ts",
  "src/app/pages/projects/projects.html",
  "src/app/pages/project-details/project-details.ts",
  "src/app/pages/project-details/project-details.html",
  "src/app/pages/project-workspace/project-workspace.ts",
  "src/app/pages/project-workspace/project-workspace.html",
  "tsconfig.app.json",
  "tsconfig.spec.json"
)

foreach ($file in $files) {
  $source = Join-Path $PSScriptRoot $file
  $destination = Join-Path $base $file

  if (-not (Test-Path $source)) {
    throw "Missing fix file: $source"
  }

  $destinationDir = Split-Path $destination -Parent

  if (-not (Test-Path $destinationDir)) {
    New-Item -ItemType Directory -Path $destinationDir -Force | Out-Null
  }

  Copy-Item $source $destination -Force
  Write-Host "Updated: $file" -ForegroundColor Green
}

Write-Host ""
Write-Host "Files updated successfully." -ForegroundColor Green
Write-Host ""
Write-Host "Now run:" -ForegroundColor Yellow
Write-Host "  npm install"
Write-Host "  npm run build"
Write-Host "  npm start"
Write-Host ""
Write-Host "Test these URLs:" -ForegroundColor Yellow
Write-Host "  /projects"
Write-Host "  /projects/e-commerce-platform"
Write-Host "  /projects/e-commerce-platform/workspace"
Write-Host ""
