$ErrorActionPreference = "Stop"
try {
    Set-CimInstance -Query "Select * from Win32_ComputerSystem" -Property @{AutomaticManagedPagefile=$true}
    Write-Host "Virtual Memory successfully set to System Managed."
} catch {
    Write-Host "Error: $($_.Exception.Message)"
    exit 1
}
