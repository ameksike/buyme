module "free" {
  source = "./free"

  db_region           = "us-east-1"
  db_database_name    = "buymedb"
  db_organization_id  = "_ENV_VAR_"
  db_supabase_api_key = "_ENV_VAR_"
  db_neon_api_key     = "_ENV_VAR_"

  cms_render_owner_id         = "_ENV_VAR_"
  cms_render_api_key          = "_ENV_VAR_"
  cms_repo                    = "https://github.com/ameksike/buyme-cms"

  store_cloudflare_api_key  = "_ENV_VAR_"
  store_cloudflare_account_id = "_ENV_VAR_"
  store_cloudflare_access_key_id = "_ENV_VAR_"
  store_cloudflare_secret_access_key = "_ENV_VAR_"
  store_cloudflare_r2_endpoint = "_ENV_VAR_"
}

# Outputs for deployment information
# output "env_free_cms_render_service_url" {
#   value       = module.free.cms_render_service_url
#   description = "URL of the deployed Strapi application"
# }
