# Render provider configuration (use a third-party provider or API integration)
provider "render" {
  api_key = var.cms_render_api_key 
  owner_id = var.cms_render_owner_id
}

# Web service definition
# resource "render_web_service" "strapi_web_service" {
#   name               = "strapi-app"
#   plan               = "free"
#   region             = "oregon"
#   start_command      = "npm start"
#   pre_deploy_command = "npm install && npm run build"

#   runtime_source = {
#     native_runtime = {
#       auto_deploy   = true
#       branch        = "main"
#       build_command = "npm install"
#       build_filter = {
#         paths         = ["src/**"]
#         ignored_paths = ["tests/**"]
#       }
#       repo_url = var.cms_repo
#       runtime  = "node"
#     }
#   }

#   disk = {
#     name       = "some-disk"
#     size_gb    = 1
#     mount_path = "/data"
#   }

#   env_vars = {
#     "DATABASE_URL" = { value = "" },
#     "R2_REGION"    = { value = cloudflare_r2_bucket.buyme.location },
#     "R2_BUCKET"    = { value = cloudflare_r2_bucket.buyme.name },
#     "R2_ACCESS_KEY_ID" = { value = var.store_cloudflare_access_key_id },
#     "R2_SECRET_ACCESS_KEY" = { value = var.store_cloudflare_secret_access_key },
#   }
# }


# Outputs for deployment information
# output "cms_render_service_url" {
#   value       = render_web_service.strapi_web_service.url
#   description = "URL of the deployed Strapi application"
# }

# Variables definition
variable "cms_render_api_key" {
  description = "API key for Render"
  type        = string
}

variable "cms_repo" {
  description = "CMS GitHub repository"
  type        = string
  default     = "https://github.com/ameksike/buyme-cms"
}

variable "cms_render_owner_id" {
  description = "CMS GitHub repository"
  type        = string
  default     = "https://github.com/ameksike/buyme-cms"
}
