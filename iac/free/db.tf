provider "neon" {
  api_key = var.db_neon_api_key
}

resource "neon_project" "buyme" {
  name                      = var.db_database_name
  history_retention_seconds = 86400
}

resource "neon_endpoint" "buyme" {
  project_id = neon_project.buyme.id
  branch_id  = neon_branch.buyme.id

  autoscaling_limit_min_cu = 0.25
  autoscaling_limit_max_cu = 1
  # suspend_timeout_seconds  = 10
  type = "read_write"
}

resource "neon_branch" "buyme" {
  project_id = neon_project.buyme.id
  parent_id  = neon_project.buyme.default_branch_id
  name       = "PRD"
}

resource "neon_role" "buyme" {
  project_id = neon_project.buyme.id
  branch_id  = neon_branch.buyme.id
  name       = "USR"
}

resource "neon_database" "buyme" {
  project_id = neon_project.buyme.id
  branch_id  = neon_branch.buyme.id
  owner_name = neon_role.buyme.name
  name       = var.db_database_name
}

output "db_url" {
  value       = neon_branch.buyme.name
  sensitive   = true
  description = "Connection string for the PostgreSQL database"
}

# terraform {
#   required_providers {
#     supabase = {
#       source  = "supabase/supabase"
#       version = "~> 1.0"
#     }
#   }
# }

# provider "supabase" {
#   access_token = var.db_supabase_api_key
# }

# # Resource: Supabase PostgreSQL Database
# resource "http_request" "create_database" {
#   url = "https://api.supabase.io/v1/projects" # Supabase API endpoint for project creation
#   method = "POST"

#   headers = {
#     "Authorization" = "Bearer ${var.db_supabase_api_key}" # Supabase API Key
#     "Content-Type"  = "application/json"
#   }

#   body = jsonencode({
#     organization_id = var.db_organization_id    # Supabase organization ID
#     database_name   = var.db_database_name      # Database name
#     plan            = "free"                    # Free plan
#     region          = var.db_region             # Preferred region
#   })
# }

# # Outputs
# output "db_url" {
#   value = "postgresql://${http_request.create_database.body.db_user}:${http_request.create_database.body.db_password}@${http_request.create_database.body.host}:${http_request.create_database.body.port}/${http_request.create_database.body.database}"
#   sensitive   = true
#   description = "Connection string for the PostgreSQL database"
# }

# Variables
variable "db_supabase_api_key" {
  description = "Supabase API key"
  type        = string
}

variable "db_neon_api_key" {
  description = "Supabase API key"
  type        = string
}

variable "db_organization_id" {
  description = "Supabase organization ID"
  type        = string
}

variable "db_database_name" {
  description = "Name of the PostgreSQL database"
  type        = string
}

variable "db_region" {
  description = "Region for the Supabase project (e.g., us-east-1)"
  type        = string
  default     = "us-east-1"
}
