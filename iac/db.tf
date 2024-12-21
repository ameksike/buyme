# Provider for Supabase (a community Terraform provider may be required)
provider "supabase" {
  access_token = ""
}

# Resource: Supabase PostgreSQL Database
resource "http_request" "create_database" {
  url = "https://api.supabase.io/v1/projects" # Supabase API endpoint for project creation
  method = "POST"

  headers = {
    "Authorization" = "Bearer ${var.supabase_api_key}" # Supabase API Key
    "Content-Type"  = "application/json"
  }

  body = jsonencode({
    organization_id = var.organization_id    # Supabase organization ID
    database_name   = var.database_name      # Database name
    plan            = "free"                 # Free plan
    region          = var.region             # Preferred region
  })
}

# Outputs
output "database_url" {
  value = "postgresql://${http_request.create_database.body.db_user}:${http_request.create_database.body.db_password}@${http_request.create_database.body.host}:${http_request.create_database.body.port}/${http_request.create_database.body.database}"
  sensitive   = true
  description = "Connection string for the PostgreSQL database"
}

# Variables
variable "supabase_api_key" {
  description = "Supabase API key"
  type        = string
}

variable "organization_id" {
  description = "Supabase organization ID"
  type        = string
}

variable "database_name" {
  description = "Name of the PostgreSQL database"
  type        = string
}

variable "region" {
  description = "Region for the Supabase project (e.g., us-east-1)"
  type        = string
  default     = "us-east-1"
}
