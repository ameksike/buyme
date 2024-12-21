# Render provider configuration (use a third-party provider or API integration)
provider "render" {
  api_key = var.render_api_key # Replace with your Render API key
}

# Web service definition
resource "render_service" "strapi_web_service" {
  name        = "strapi-app"                               # Name of the Render service
  type        = "web_service"                              # Service type
  repo        = var.cms_repo                               # Replace with your GitHub repository
  branch      = "main"                                     # Branch to deploy from
  region      = "us-central"                               # Deployment region
  build_command = "npm install && npm run build"           # Strapi build command
  start_command = "npm start"                              # Strapi start command
  plan        = "starter"                                  # Render plan (e.g., starter, standard)
  env         = "node"                                     # Node.js environment

  env_vars = {
    R2_REGION    = "auto"                                  # Region for the R2 bucket
    DATABASE_URL = var.database_url                        # Connection string for the database
    R2_BUCKET    = var.r2_bucket_name                      # Name of the Cloudflare R2 bucket
    R2_ACCESS_KEY_ID = var.r2_access_key_id                # Access key for the R2 bucket
    R2_SECRET_ACCESS_KEY = var.r2_secret_access_key        # Secret key for the R2 bucket
    
    # DATABASE_URL = data.terraform_remote_state.supabase.outputs.database_url # Inject database connection string
    # R2_BUCKET = data.terraform_remote_state.r2_bucket.outputs.r2_bucket_name # Dynamic bucket name
    # R2_ACCESS_KEY_ID  = data.terraform_remote_state.r2_bucket.outputs.r2_access_key_id # Dynamic access key ID
    # R2_SECRET_ACCESS_KEY  = data.terraform_remote_state.r2_bucket.outputs.r2_secret_access_key # Dynamic secret access key
  }
}

# Outputs for deployment information
output "render_service_url" {
  value = render_service.strapi_web_service.url
  description = "URL of the deployed Strapi application"
}

# Variables definition
variable "render_api_key" {
  description = "API key for Render"
  type        = string
}

variable "database_url" {
  description = "Database connection URL"
  type        = string
}

variable "r2_bucket_name" {
  description = "Cloudflare R2 bucket name"
  type        = string
}

variable "r2_access_key_id" {
  description = "Cloudflare R2 access key ID"
  type        = string
}

variable "r2_secret_access_key" {
  description = "Cloudflare R2 secret access key"
  type        = string
}

variable "cms_repo" {
  description = "CMS GitHub repository"
  type        = string
  default     = "https://github.com/ameksike/buyme-cms"
}
